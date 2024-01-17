<script lang="ts">
    import { css } from "styled-system/css";

    export let disable = false;
</script>

<button
    class={css({
        aspectRatio: '1',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'rgb(237, 68, 75)',
        boxShadow: '0 8px 0 rgb(138, 42, 45)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        cursor: disable ? 'wait' : 'pointer',
        _hover: {
            transform: 'translate(0, 3px)',
            boxShadow: '0 2px 0 rgb(138, 42, 45)'
        },
    })}
    disabled={disable}
    on:click
>
    <slot />
</button>

