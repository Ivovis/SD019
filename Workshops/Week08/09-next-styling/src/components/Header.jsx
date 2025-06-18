import headerStyles from "@/header.module.css";

export default function Header() {
  return (
    <>
      <header className={headerStyles.header}>{children}</header>
    </>
  );
}
