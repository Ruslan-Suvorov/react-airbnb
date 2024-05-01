import "./index.css";

export const ListItem = ({ children, imageSrc, title }) => {
  return (
    <li className="list-item">
      {title && <h3 className="list-item__title">{title}</h3>}
      <div className="list-item__content">
        {imageSrc && <img src={imageSrc} height={24} width={24} />}
        {children}
      </div>
    </li>
  );
};
