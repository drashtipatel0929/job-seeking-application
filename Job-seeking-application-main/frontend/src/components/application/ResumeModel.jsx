const ResumeModel = ({ fileUrl, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <iframe
          src={fileUrl}
          style={{ width: "100%", height: "90vh" }}
          title="Resume PDF"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ResumeModel;
