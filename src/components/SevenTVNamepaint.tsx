

export default function SevenTVNamepaint(props) {
    // TODO: Fetch 7TV cosmetics from `https://7tv.io/v2/cosmetics?user_identifier=login` for example,
    //   construct styles from that, and memoize the result (`useMemo()`).
    //   Apply those styles to the `span` below based on the `props.login` prop or `props.paint` prop.

    return (
        <span style={{
            "-webkit-text-fill-color": "transparent",
            "background-clip": "text",
            "-webkit-background-clip": "text",
            "background-size": "cover",
            "background-color": "currentColor",
            "background-image": props.paintBackground,
            "filter": props.paintFilter,
            "color": props.paintColor,
            ...props.style
        }}>{props.children}</span>
    );
}
