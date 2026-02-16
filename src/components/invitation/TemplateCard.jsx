function TemplateCard({ title, active, onSelect }) {
  return (
    <button
      type="button"
      className={`template-card ${active ? 'template-card--active' : ''}`}
      onClick={onSelect}
    >
      <div className="template-pill">Template</div>
      <h3 className="template-title">{title}</h3>
      <p className="template-description">
        Create a matching invite in just a few clicks.
      </p>
    </button>
  );
}

export default TemplateCard;