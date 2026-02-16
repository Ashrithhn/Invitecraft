function InvitationEditor({ values, onFieldChange }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onFieldChange(name, value);
  };

  return (
    <section className="invitation-editor">
      <p className="eyebrow">Step 2 · Customize</p>
      <h2 className="section-title">Fill in your event details</h2>
      <p className="section-subtitle">
        Everything you type here updates the preview instantly, so you can fine-tune the
        tone before you share.
      </p>

      <div className="editor-grid">
        <label className="field">
          <span className="field-label">Event title</span>
          <input
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="e.g. Sarah&apos;s 21st Birthday"
          />
        </label>

        <label className="field">
          <span className="field-label">Host / from</span>
          <input
            name="host"
            value={values.host}
            onChange={handleChange}
            placeholder="e.g. Hosted by the Johnson family"
          />
        </label>

        <div className="field field-inline">
          <label>
            <span className="field-label">Date</span>
            <input
              name="date"
              value={values.date}
              onChange={handleChange}
              placeholder="May 24, 2026"
            />
          </label>
          <label>
            <span className="field-label">Time</span>
            <input
              name="time"
              value={values.time}
              onChange={handleChange}
              placeholder="7:00 PM"
            />
          </label>
        </div>

        <label className="field">
          <span className="field-label">Location</span>
          <input
            name="location"
            value={values.location}
            onChange={handleChange}
            placeholder="Venue or address"
          />
        </label>

        <label className="field">
          <span className="field-label">Personal message</span>
          <textarea
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            placeholder="Add a warm note, dress code, RSVP details, or anything else guests should know."
          />
        </label>
      </div>
    </section>
  );
}

export default InvitationEditor;