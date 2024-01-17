<script>

  import Icon from "@iconify/svelte";
import { css } from "styled-system/css";

</script>
<div class={css({
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '0 0 5px #999',
    border: '1px solid transparent',
    borderRadius: '0.25rem',
    color: '#333',
    gap: '0.5rem',
    lineHeight: '1.5',
    borderLeft: '5px solid #3998DB',
})}>
    <span
        class={css({
            fontSize: '1.3rem'
        })}
    >
        <Icon icon="ph:info-fill"/>
    </span>
    <slot />
</div>