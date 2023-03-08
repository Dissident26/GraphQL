import { useEffect, useState } from 'react';

export type InputEventType = React.ChangeEvent<HTMLInputElement>;

export const useImageInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState<string>(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target?.files[0]);
  };

  return { onSelectFile, preview };
};
