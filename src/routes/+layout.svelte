<script>
import { center, container } from 'styled-system/patterns';
import '../app.css'
import { css } from 'styled-system/css';
import SettingButton from '$lib/components/SettingButton.svelte';
</script>

<div class={css({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: '375px'
})}>
    <header
        class={center({
            backgroundColor: "rgb(255, 244, 228)",
            fontFamily: "'M PLUS 1 Code', monospace",
            fontWeight: 'bold',
            fontSize: ['xl', '2xl', '3xl', '3xl'],
            height: ['100px', '120px', '150px', '150px'],
            padding: '0 40px',
        })}
    >
        <h1>
            <a href="/">AI とおはなししよう 🤖</a>
        </h1>
    </header>
    <main class={css({
        flex: 1,
        overflowX: 'hidden',
        padding: '0 40px',
    })}>
        <slot></slot>

        <span
            class={css({
                position: 'fixed',
                right: '50px',
                bottom: '50px',
            })}
        >
            <SettingButton />
        </span>
    </main>
</div>