
import Links from "./links/Links";
import styles from "./navbar.module.css"

const NavBar = () => {
    return (  

<div class={styles.container}>
<div class="logo">Logo</div>
<div>
    <Links/>
</div>

</div>

    );
}
 
export default NavBar;
