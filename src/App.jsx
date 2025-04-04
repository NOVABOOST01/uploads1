import './App.css';
import { FaFileAudio, FaFileImage, FaFilePdf, FaDownload } from 'react-icons/fa';

function App() {
  // List of files in your public folder (you would typically fetch this from an API)
  const files = [
    { name: 'Rathu Hette Palal MAdi', path: '/0404.MP3', type: 'audio' },
    { name: 'Image', path: '/1.jpeg', type: 'image' },
    { name: 'Document', path: '/2222.pdf', type: 'pdf' }
    // Add more files as needed
  ];

  // Function to get the appropriate icon based on file type
  const getFileIcon = (type) => {
    switch(type) {
      case 'audio':
        return <FaFileAudio />;
      case 'image':
        return <FaFileImage />;
      case 'pdf':
        return <FaFilePdf />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Files Dashboard</h1>
      <div className="file-list">
        {files.map((file, index) => (
          <div key={index} className="file-item">
            <a 
              href={file.path} 
              target="_blank" 
              rel="noopener noreferrer"
              className="file-link"
            >
              <span className="file-icon">{getFileIcon(file.type)}</span>
              {file.name}
              <span className={`file-type-badge file-type-${file.type}`}>
                {file.type}
              </span>
            </a>
            <span className="file-actions">
              <a href={file.path} download className="download-btn">
                <FaDownload /> Download
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;