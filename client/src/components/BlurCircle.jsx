const BlurCircle = ({top="auto",left="auto",right="auto",bottom="auto"}) => {
return (
    <div
        className="absolute -z-50 h-58 w-58 aspect-square rounded-full bg-primary/30"
        style={{
            top: top,
            left: left,
            right: right,
            bottom: bottom,
            filter: "blur(60px)",
        }}
    ></div>
)
}

export default BlurCircle