export default function Button({
    children = "Button",
    type = "button",
    className = "",
    onClick = () => {},
}) {
    return (
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>
    );
}
