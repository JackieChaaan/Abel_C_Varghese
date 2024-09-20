import NavLinks from "../NavLinks/NavLinks";
import './MobileNav.scss';


const MobileNav = ({toggleMobNav}) => {
    return (
        <section className='mobile-nav-links'>
            <NavLinks toggleMobNav={toggleMobNav} />
        </section>
    )
}

export default MobileNav
