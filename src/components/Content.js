import React from 'react'

function Content() {
  return (
    <div className="content">
    <div className="content-panel">
      <div className="vertical-tabs">
        <a href="#" className="active">
          View all
        </a>
        <a href="#">Developer tools</a>
        <a href="#">Communication</a>
        <a href="#">Productivity</a>
        <a href="#">Browser tools</a>
        <a href="#">Marketplace</a>
      </div>
    </div>
    <div className="content-main">
      <div className="card-grid">
        <article className="card">
          <div className="card-header">
            <div>
              <span>
                <img src="https://assets.codepen.io/285131/zeplin.svg" />
              </span>
              <h3>Zeplin</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span />
            </label>
          </div>
          <div className="card-body">
            <p>Collaboration between designers and developers.</p>
          </div>
          <div className="card-footer">
            <a href="#">View integration</a>
          </div>
        </article>
        <article className="card">
          <div className="card-header">
            <div>
              <span>
                <img src="https://assets.codepen.io/285131/github.svg" />
              </span>
              <h3>GitHub</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span />
            </label>
          </div>
          <div className="card-body">
            <p>Link pull requests and automate workflows.</p>
          </div>
          <div className="card-footer">
            <a href="#">View integration</a>
          </div>
        </article>
        <article className="card">
          <div className="card-header">
            <div>
              <span>
                <img src="https://assets.codepen.io/285131/figma.svg" />
              </span>
              <h3>Figma</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span />
            </label>
          </div>
          <div className="card-body">
            <p>Embed file previews in projects.</p>
          </div>
          <div className="card-footer">
            <a href="#">View integration</a>
          </div>
        </article>
        <article className="card">
          <div className="card-header">
            <div>
              <span>
                <img src="https://assets.codepen.io/285131/zapier.svg" />
              </span>
              <h3>Zapier</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" />
              <span />
            </label>
          </div>
          <div className="card-body">
            <p>Build custom automations and integrations with apps.</p>
          </div>
          <div className="card-footer">
            <a href="#">View integration</a>
          </div>
        </article>
        <article className="card">
          <div className="card-header">
            <div>
              <span>
                <img src="https://assets.codepen.io/285131/notion.svg" />
              </span>
              <h3>Notion</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span />
            </label>
          </div>
          <div className="card-body">
            <p>Embed notion pages and notes in projects.</p>
          </div>
          <div className="card-footer">
            <a href="#">View integration</a>
          </div>
        </article>
        <article className="card">
          <div className="card-header">
            <div>
              <span>
                <img src="https://assets.codepen.io/285131/slack.svg" />
              </span>
              <h3>Slack</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span />
            </label>
          </div>
          <div className="card-body">
            <p>Send notifications to channels and create projects.</p>
          </div>
          <div className="card-footer">
            <a href="#">View integration</a>
          </div>
        </article>
        <article className="card">
          <div className="card-header">
            <div>
              <span>
                <img src="https://assets.codepen.io/285131/zendesk.svg" />
              </span>
              <h3>Zendesk</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span />
            </label>
          </div>
          <div className="card-body">
            <p>Link and automate Zendesk tickets.</p>
          </div>
          <div className="card-footer">
            <a href="#">View integration</a>
          </div>
        </article>
        <article className="card">
          <div className="card-header">
            <div>
              <span>
                <img src="https://assets.codepen.io/285131/jira.svg" />
              </span>
              <h3>Atlassian JIRA</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" />
              <span />
            </label>
          </div>
          <div className="card-body">
            <p>Plan, track, and release great software.</p>
          </div>
          <div className="card-footer">
            <a href="#">View integration</a>
          </div>
        </article>
        <article className="card">
          <div className="card-header">
            <div>
              <span>
                <img src="https://assets.codepen.io/285131/dropbox.svg" />
              </span>
              <h3>Dropbox</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span />
            </label>
          </div>
          <div className="card-body">
            <p>Everything you need for work, all in one place.</p>
          </div>
          <div className="card-footer">
            <a href="#">View integration</a>
          </div>
        </article>
        <article className="card">
          <div className="card-header">
            <div>
              <span>
                <img src="https://assets.codepen.io/285131/google-chrome.svg" />
              </span>
              <h3>Google Chrome</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span />
            </label>
          </div>
          <div className="card-body">
            <p>
              Link your Google account to share bookmarks across your
              entire team.
            </p>
          </div>
          <div className="card-footer">
            <a href="#">View integration</a>
          </div>
        </article>
        <article className="card">
          <div className="card-header">
            <div>
              <span>
                <img src="https://assets.codepen.io/285131/discord.svg" />
              </span>
              <h3>Discord</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span />
            </label>
          </div>
          <div className="card-body">
            <p>
              Keep in touch with your customers without leaving the app.
            </p>
          </div>
          <div className="card-footer">
            <a href="#">View integration</a>
          </div>
        </article>
        <article className="card">
          <div className="card-header">
            <div>
              <span>
                <img src="https://assets.codepen.io/285131/google-drive.svg" />
              </span>
              <h3>Google Drive</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" />
              <span />
            </label>
          </div>
          <div className="card-body">
            <p>
              Link your Google account to share files across your entire
              team.
            </p>
          </div>
          <div className="card-footer">
            <a href="#">View integration</a>
          </div>
        </article>
      </div>
    </div>
  </div>  )
}

export default Content