import useReveal from "../../hooks/useReveal";

export default function Reveal({
  as: Tag = "div",
  variant = "",
  delay = 0,
  className = "",
  children,
  style,
  ...rest
}) {
  const [ref, visible] = useReveal();
  const cls = ["reveal", variant && `reveal--${variant}`, visible && "is-visible", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={cls} style={{ "--reveal-delay": `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
