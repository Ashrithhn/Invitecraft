function InvitationPreview({ templateTitle, fields }) {
  const { title, host, date, time, location, message } = fields;
  const displayTitle = title || templateTitle;

  const templateImageMap = {
    'Birthday Invitation':
      'https://images.pexels.com/photos/1968587/pexels-photo-1968587.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'Wedding Invitation':
      'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'Anniversary Invitation':
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
  };

  const imageSrc =
    templateImageMap[templateTitle] ??
    'https://images.pexels.com/photos/3171849/pexels-photo-3171849.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';

  return (
    <aside className="invitation-preview">
      <div className="invitation-media">
        <img
          src={imageSrc}
          alt="Elegant celebration setup with candles and glasses"
          loading="lazy"
        />
        <div className="invitation-media-gradient" />
      </div>

      <p className="eyebrow preview-eyebrow">Live preview</p>
      <h2 className="section-title">See exactly what guests will get</h2>

      <div className="invitation-card">
        <p className="invitation-tag">{templateTitle}</p>
        <h3 className="invitation-title">{displayTitle}</h3>

        {host && <p className="invitation-line">Hosted by {host}</p>}

        {(date || time) && (
          <p className="invitation-line">
            {date}
            {date && time && ' · '}
            {time}
          </p>
        )}

        {location && (
          <p className="invitation-line invitation-location">{location}</p>
        )}

        {(message || '').trim() && (
          <p className="invitation-message">{message}</p>
        )}
      </div>
    </aside>
  );
}

export default InvitationPreview;