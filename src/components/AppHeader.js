import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CCardImage,
  CModal,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CForm,
  CFormInput,
  CInputGroup,
  CFormCheck,
  CFormText
} from '@coreui/react'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'
import LogoImg from 'src/assets/brand/lg_logo.png'
import './appHeader.scss'
import './appHeaderLogin.scss'
import RegisterBack from 'src/assets/images/register_back.png'

const AppHeader = () => {
  const [loginVisible, setLoginVisible] = useState(false)
  const [registerVisible, setRegisterVisible] = useState(false)
  const [resetVisible, setResetVisible] = useState(false)

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const openLogin = () => {
    setRegisterVisible(false);
    setResetVisible(false);
    setLoginVisible(true);
  }


  const openRegister = () => {
    setRegisterVisible(true);
    setResetVisible(false);
    setLoginVisible(false);
  }

  const openReset = () => {
    setRegisterVisible(false);
    setResetVisible(true);
    setLoginVisible(false);
  }
  return (
    <>
      <CHeader position="sticky" className="mb-4">
        <CContainer fluid>
          <CHeaderToggler
            className="ps-1"
            onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
          <CHeaderBrand className="mx-auto d-md-none" to="/">
            <CCardImage orientation="top" src={LogoImg} />
            {/* <CIcon icon={logo} height={48} alt="Logo" /> */}
          </CHeaderBrand>
          <CHeaderNav>
            <CNavItem>
              <CNavLink to="/" component={NavLink}>
                Tracker
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink to="/database" component={NavLink}>
                Database
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink to="/wiki" component={NavLink}>
                Wiki
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink to="/" component={NavLink}>
                My Account
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CButton className='signout-btn' variant="ghost" onClick={() => openLogin()}>Sign Out</CButton>
            </CNavItem>
          </CHeaderNav>
        </CContainer>
        {/* <CHeaderDivider />
        <CContainer fluid>
          <AppBreadcrumb />
        </CContainer> */}
      </CHeader>
      <CModal alignment="center" visible={loginVisible} onClose={() => setLoginVisible(false)}>
        <CCardBody>
          <CForm style={{ textAlign: "center" }}>
            <span className='login-title'>Sign In</span>
            <div className='login-input-label mt-4'>Email</div>
            <CInputGroup className="mb-3">
              <CFormInput placeholder="Username" autoComplete="username" />
            </CInputGroup>
            <div className='login-input-label'>Password</div>
            <CInputGroup className='mb-1'>
              <CFormInput
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </CInputGroup>
            <CFormCheck className='login-remember-label' type="checkbox" id="autoSizingCheck" label="Remember me" />
            <div>
              <Link to="/dashboard"><CButton color="primary mt-3 login-signin-btn" className="px-4" style={{ width: "100%" }}>
                Sign In
              </CButton></Link>
            </div>
            <div>
              <CButton color="link" className="px-0 login-forgot" onClick={() => openReset()}>
                Forgot password?
              </CButton>
            </div>
            <hr style={{ width: "100%" }}></hr>
            <div>
              <span className='login-label2'>Don&apos;t have an account?</span>
              <CButton color="link" className="px-0 login-signup" onClick={() => openRegister()}>
                Sign Up
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CModal>
      <CModal size='lg' alignment="center" visible={registerVisible} onClose={() => setRegisterVisible(false)}>
        <CCardGroup>
          <CCard><CCardImage orientation="top" src={RegisterBack} style={{ height: "-webkit-fill-available" }} /></CCard>
          <CCard className="p-4">
            <CCardBody>
              <CForm style={{ textAlign: "center" }}>
                <span className='login-title'>Sign Up</span>
                <div className='login-input-label mt-4'>Full Name</div>
                <CInputGroup className="mb-3">
                  <CFormInput placeholder="Full Name" autoComplete="username" />
                </CInputGroup>
                <div className='login-input-label'>Email</div>
                <CInputGroup className="mb-3">
                  <CFormInput placeholder="Email" autoComplete="username" />
                </CInputGroup>
                <div className='login-input-label'>Password</div>
                <CInputGroup className='mb-3'>
                  <CFormInput
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                </CInputGroup>
                <div>
                  <CButton color="primary mt-3 login-signin-btn" className="px-4" style={{ width: "100%" }}>
                    Sign Up
                  </CButton>
                </div>
                <hr style={{ width: "100%" }}></hr>
                <div>
                  <span className='login-label2'>Already have an account?</span>
                  <CButton color="link" className="px-0 login-signup" onClick={() => { setLoginVisible(true); setRegisterVisible(false); }}>
                    Sign In
                  </CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCardGroup>
      </CModal>
      <CModal alignment="center" visible={resetVisible} onClose={() => setResetVisible(false)}>
        <CCard className="p-4">
          <CCardBody>
            <CForm style={{ textAlign: "center" }}>
              <span className='login-title'>Reset Password</span>
              <CFormText>Please enter your email address and we’ll send you a link to reset your password.</CFormText>
              <div className='login-input-label mt-4'>Email</div>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Username" autoComplete="username" />
              </CInputGroup>
              <div>
                <CButton color="primary mt-3 login-signin-btn" className="px-4" style={{ width: "100%" }}>
                  Reset Password
                </CButton>
              </div>
              <hr style={{ width: "100%" }}></hr>
              <div>
                <span className='login-label2'>Already have an account?</span>
                <CButton color="link" className="px-0 login-signup" onClick={() => openLogin()}>
                  Sign In
                </CButton>

              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CModal>
    </>
  )
}

export default AppHeader
