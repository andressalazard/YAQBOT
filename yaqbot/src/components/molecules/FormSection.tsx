import React from 'react';
import Card from '../atoms/Card';

interface FormSectionProps {
  title: string;
  classNames: {
    title: string;
    section: string;
    card: string;
  };
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ title, classNames, children }) => {
  return (
    <section className={classNames.section}>
      <div className={classNames.title}>
        <h1>{title}</h1>
      </div>
      <Card className={classNames.card}>{children}</Card>
    </section>
  );
};

export default FormSection;
