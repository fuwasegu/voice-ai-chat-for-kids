<script>
  import Icon from "@iconify/svelte";
  import { css } from "styled-system/css";

</script>
<a href="/setting">
    <div
        class={css({
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            backgroundColor: 'rgb(67, 237, 67)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '40px',
        })}
    >
        <Icon icon="ant-design:setting-filled"/>
    </div>
</a>