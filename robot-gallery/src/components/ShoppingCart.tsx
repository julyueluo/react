import React from 'react'
import styles from './ShoppingCart.module.css'

// type
interface Props {

}
interface State {
  isOpen: boolean
}
class ShoppingCart extends React.Component<Props, State> {
  // Component vs. PureComponent 生命周期不同
  // P props 组件间数据
  // S state
  // ss 自定义事件
  constructor(props: Props){
    super(props);
    this.state = {  
      isOpen: false,  // 初始化组件状态 
    };
  }

  render() {  // 渲染html
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button}
        onClick={()=>{
          this.setState({isOpen: !this.state.isOpen})
        }}>购物车 2 （件）</button>
        <div className={styles.cartDropDown}
        style={{
          display:this.state.isOpen ? "block" : "none"
        }}>
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart