import React from "react"
import {HeaderContainer, SearchBar, LoginLogout, SearchButton} from './style'
import Button from "@material-ui/core/Button"
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Search from "@material-ui/icons/Search"


class Header extends React.Component {
    state = {
        anchorEl: null,
        loginLogout: false
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      }
    
    handleClose = () => {
    this.setState({ anchorEl: null });
    }

    onClickLoginLogout = () => {
        this.setState({loginLogout: !this.state.loginLogout})
    }

    render() {
        const { anchorEl } = this.state

        return (
            <HeaderContainer>
                        <h1>Elo4</h1>

                        <SearchBar>
                            <button aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleClick}
                            >
                                Prudutos
                            </button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                                >
                                <MenuItem onClick={this.handleClose}>Produtos</MenuItem>
                                <MenuItem onClick={this.handleClose}>Materiais</MenuItem>
                                <MenuItem onClick={this.handleClose}>Lojas</MenuItem>
                            </Menu>
                            <input type="text" value={''} placeholder="Buscar produtos" />
                            <SearchButton>
                                <Search/>
                            </SearchButton>
                        </SearchBar>

                        {this.state.loginLogout === false ?
                            <LoginLogout>
                                <Button color="secondary">Cadastrar</Button>
                                <Button color="secondary" onClick={this.onClickLoginLogout}>Entrar</Button>
                            </LoginLogout>
                        :
                            <LoginLogout>
                                <Button color="secondary" >Quero Vender</Button>
                                <Button color="secondary" onClick={this.onClickLoginLogout}>Sair</Button>
                                <Avatar alt="Remy Sharp" src="https://picsum.photos/80/80?a=1 "/>
                            </LoginLogout>
                        }
            </HeaderContainer>
        )
    }
}

export default Header