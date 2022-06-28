type Props = {
    msg: string
}

export default (props: Props) => {
    return <div><div>Hello, {props.msg}!</div></div>
}