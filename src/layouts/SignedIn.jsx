import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.google.com/search?q=iconclient=opera-gxhs=Baesxsrf=AOaemvLhfeWl-JZNB81RAupFkstzNUWfFw:1636978131160&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiDxYzgqpr0AhVKDuwKHSDJBoIQ_AUoAXoECAIQAwbiw=1495bih=723dpr=1.25#imgrc=AMWHrt6gVO8MJM"/>
                <Dropdown pointing="top left" text="Muhammed">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
