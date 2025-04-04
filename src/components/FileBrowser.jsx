import { useState, useEffect } from 'react';
import './FileBrowser.css';

// This is a mock function to simulate getting files from your assets folder
// In a real app, you'd need to handle this differently since browsers can't directly access the file system
const getAssetFiles = () => {
  // In a real application, you might:
  // 1. Import all files using Vite's import.meta.glob
  // 2. Or have a JSON manifest of your assets
  return [
    { name: 'react.svg', type: 'image/svg+xml', path: '/src/assets/react.svg', size: '4.5 KB' },
    { name: 'vite.svg', type: 'image/svg+xml', path: '/vite.svg', size: '1.8 KB' },
    // Add more files as needed
  ];
};

function FileBrowser() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Load files when component mounts
    const assetFiles = getAssetFiles();
    setFiles(assetFiles);
  }, []);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const renderFilePreview = () => {
    if (!selectedFile) return <div className="preview-placeholder">Select a file to preview</div>;

    if (selectedFile.type.startsWith('image/')) {
      return <img src={selectedFile.path} alt={selectedFile.name} className="file-preview" />;
    }
    
    return <div className="preview-placeholder">Preview not available for this file type</div>;
  };

  return (
    <div className="file-browser">
      <div className="file-browser-header">
        <h2>Assets Browser</h2>
      </div>
      
      <div className="file-browser-content">
        <div className="file-list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr 
                  key={index} 
                  className={selectedFile === file ? 'selected' : ''}
                  onClick={() => handleFileSelect(file)}
                >
                  <td>{file.name}</td>
                  <td>{file.type}</td>
                  <td>{file.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="file-preview-container">
          {renderFilePreview()}
        </div>
      </div>
    </div>
  );
}

export default FileBrowser; 