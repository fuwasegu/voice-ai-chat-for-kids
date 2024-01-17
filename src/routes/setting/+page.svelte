<script lang="ts">
  import { setting } from '$lib/store';
import { css } from 'styled-system/css';
import { center } from 'styled-system/patterns';
  import { onMount } from 'svelte';

let apiKey: string = '';
let age: number = 5;

onMount(() => {
    const stored = $setting;
    apiKey = stored.apiKey;
    age = stored.age;
})

const save = () => {
    if (!age || !apiKey) {
        alert('全フィールド入力してください');
        return;
    }

    $setting = {
        age: age ?? 5,
        apiKey: apiKey ?? '',
    };
}
</script>

<div
    class={center({
        marginTop: '80px',
        display: 'flex',
        flexDirection: 'column'
    })}
>
    <table
        class={css({
            borderCollapse: 'collapse',
            borderSpacing: '0 15px',
            tableLayout: 'fixed'
        })}
    >
        <tr>
            <th><label for="api-key">API Key</label></th>
            <td><input type="text" id="api-key" placeholder="xxx" bind:value={apiKey} required></td>
        </tr>
        <tr>
            <th><label for="age">ユーザーの年齢</label></th>
            <td><input type="number" id="age" placeholder="5" bind:value={age} min={0} required> 歳</td>
        </tr>
    </table>
    <div
        class={css({
            marginTop: '100px'
        })}
    >
        <button
            class={css({
                color: '#fff',
                backgroundColor: '#eb6100',
                borderBottom: '5px solid #b84c00',
                _hover: {
                    marginTop: '3px',
                    color: '#fff',
                    background: '#f56500',
                    borderBottom: '2px solid #b84c00',
                },
                boxShadow: '0 3px 5px rgba(0, 0, 0, .3)',
                padding: '8px 20px',
                borderRadius: '25%',
                cursor: 'pointer'
            })}
            on:click={() => {save(); alert('保存しました');}}
        >保存</button>
    </div>
</div>

<style>
    input {
        background: #f2f2f2;
        border: 1px solid #999;
        margin: 0 5px;
        padding: 5px;
        box-sizing: border-box;
    }
    input[type="text"] {
        width: 300px;
    }

    input[type="number"] {
        width: 80px;
    }

    th {
        max-width: 200px;
    }

    th, td {
        padding: 8px;
    }

    @media (max-width: 600px) {
        input {
            margin-left: 0;
        }
        table, tr {
            display: block;
        }

        tr {
            margin-bottom: 15px;
        }

        th, td {
            display: block;
            text-align: left;
            width: 100%;
        }
    }
</style>