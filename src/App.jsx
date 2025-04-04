import './App.css';
import { FaFileAudio, FaFileImage, FaFilePdf, FaDownload } from 'react-icons/fa';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// File Detail Component
function FileDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the file based on id
  const file = files.find((f, index) => index === parseInt(id));
  
  if (!file) return <div>File not found</div>;

  return (
    <div className="file-detail">
      <button onClick={() => navigate('/')} className="back-btn">← Back</button>
      <div className="file-detail-content">
        <span className="file-icon">{getFileIcon(file.type)}</span>
        <h2>{file.name}</h2>
        <span className={`file-type-badge file-type-${file.type}`}>
          {file.type}
        </span>
        <a href={file.path} download className="download-btn">
          <FaDownload /> Download
        </a>
      </div>
    </div>
  );
}

// List of files (moved outside to be accessible by both components)
const files = [
  { name: 'Rathu Hette Palal MAdi', path: '/0404.MP3', type: 'audio' },
  { name: 'Image', path: '/1.jpeg', type: 'image' },
  { name: 'Document', path: '/2222.pdf', type: 'pdf' }
];

// FileList Component
function FileList() {
  return (
    <div className="file-list">
      {files.map((file, index) => (
        <div key={index} className="file-item">
          <Link 
            to={`/file/${index}`}
            className="file-link"
          >
            <span className="file-icon">{getFileIcon(file.type)}</span>
            <span className="file-name">{file.name}</span>
            <span className={`file-type-badge file-type-${file.type}`}>
              {file.type}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}

// Get file icon function (kept the same)
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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Files Store</h1>
        <Routes>
          <Route path="/" element={<FileList />} />
          <Route path="/file/:id" element={<FileDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;