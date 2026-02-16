import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout';
import TemplateCard from './components/invitation/TemplateCard';
import InvitationEditor from './components/invitation/InvitationEditor';
import InvitationPreview from './components/invitation/InvitationPreview';
import { templates } from './data/templates';

import './styles/layout.css';
import './styles/navbar.css';
import './styles/invitation.css';
import './styles/polish.css';

function App() {
  const [selectedTemplateId, setSelectedTemplateId] = useState(
    templates[0]?.id ?? 1,
  );
  const [fields, setFields] = useState({
    title: templates[0]?.title ?? 'Your Event',
    host: '',
    date: '',
    time: '',
    location: '',
    message: '',
  });
  const [copyStatus, setCopyStatus] = useState('');

  const selectedTemplate =
    templates.find((template) => template.id === selectedTemplateId) ??
    templates[0];

  const handleFieldChange = (name, value) => {
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplateId(template.id);
    setFields((prev) => ({
      ...prev,
      title: template.title,
    }));
  };

  const handleReset = () => {
    setSelectedTemplateId(templates[0]?.id ?? 1);
    setFields({
      title: templates[0]?.title ?? 'Your Event',
      host: '',
      date: '',
      time: '',
      location: '',
      message: '',
    });
    setCopyStatus('');
  };

  const handleCopyToClipboard = async () => {
    const { title, host, date, time, location, message } = fields;

    const invitationText = [
      title || selectedTemplate?.title,
      host && `Hosted by: ${host}`,
      (date || time) && `When: ${[date, time].filter(Boolean).join(' at ')}`,
      location && `Where: ${location}`,
      '',
      message || 'Looking forward to celebrating together!',
    ]
      .filter(Boolean)
      .join('\n');

    try {
      await navigator.clipboard.writeText(invitationText);
      setCopyStatus('Invitation copied to clipboard');
      window.setTimeout(() => {
        setCopyStatus('');
      }, 2000);
    } catch (error) {
      console.error(error);
      setCopyStatus('Unable to copy – please copy manually');
    }
  };

  return (
    <div className="app-shell">
      <div className="app-orbit app-orbit--left" />
      <div className="app-orbit app-orbit--right" />
      <Navbar />
      <Layout>
        <section className="section-card">
          <header className="section-header">
            <div>
              <p className="eyebrow">Step 1 · Choose a template</p>
              <h2 className="section-title">Start from a polished base</h2>
              <p className="section-subtitle">
                Pick a layout that matches your event. You can customize all the
                details on the right.
              </p>
            </div>
          </header>

          <div className="template-grid">
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                title={template.title}
                active={template.id === selectedTemplateId}
                onSelect={() => handleTemplateSelect(template)}
              />
            ))}
          </div>

          <div className="section-actions">
            {copyStatus && <p className="copy-status">{copyStatus}</p>}
            <div className="section-actions-buttons">
              <button
                type="button"
                className="btn-secondary"
                onClick={handleReset}
              >
                Reset details
              </button>
              <button
                type="button"
                className="btn-primary"
                onClick={handleCopyToClipboard}
              >
                Copy invitation text
              </button>
            </div>
          </div>
        </section>

        <section className="section-card section-card--stacked">
          <InvitationEditor values={fields} onFieldChange={handleFieldChange} />
          <InvitationPreview
            templateTitle={selectedTemplate?.title}
            fields={fields}
          />
        </section>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
