import { ReactNode } from "react";

type SectionCardProps = {
  icon: string;
  title: any;
  children: ReactNode;
};

export const SectionCard = ({ icon, title, children }: SectionCardProps) => {
  return (
    <div className="col s12 m4">
      <div className="icon-block">
        <h2 className="center brown-text">
          <i className="material-icons">{icon}</i>
        </h2>
        <h5 className="center">{title}</h5>
        <p className="light">{children}</p>
      </div>
    </div>
  );
};
