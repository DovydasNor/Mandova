import { useEffect } from 'react';

interface SchemaMarkupProps {
  schema: object;
  id?: string;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schema, id = 'schema-markup' }) => {
  useEffect(() => {
    // Remove existing schema if any
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }

    // Create new script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById(id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [schema, id]);

  return null; // This component doesn't render anything
};

export default SchemaMarkup;