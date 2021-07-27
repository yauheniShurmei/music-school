import classes from "./InfoCircle.module.css"

const InfoCircle = (props) => {
    return <div className={classes.InfoCircle}>{props.children}</div>
}

export default InfoCircle;