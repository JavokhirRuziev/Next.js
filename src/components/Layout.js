import Footer from "./Footer"
import Headers from "./Header"
import styles from '../styles/styles.module.css'


function Layout({children}) {
  return (
    <div className='content'>
      <Headers ></Headers>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout