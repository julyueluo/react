import React from "react"

interface RobotsProps {
  id: number,
  name: string,
  email: string
}
// 组件间的数据传递  props
// FC = functioncomponent 函数式组件
// const Robot: React.FC<RobotsProps> = (props)=>{
  //花括号展开数据
  // const id = props.id
const Robot: React.FC<RobotsProps> = ({id, name, email})=>{
  return(
  <li>
    <img src={`https://robohash.org/${id}`} alt="" />
    <h2>{name}</h2>
    <p>{email}</p>
  </li>
  )
};

export default Robot;