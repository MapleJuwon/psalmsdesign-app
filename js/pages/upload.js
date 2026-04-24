/**
 * Design Upload Page
 */

export class UploadPage {
  render() {
    return `
      <div class="upload-container max-width-800">
        <h2 class="mb-6">Design Entwürfe hochladen</h2>
        
        <div class="card bg-white p-8 mb-8">
          <div class="upload-zone" id="drop-zone">
            <i data-lucide="upload-cloud" class="upload-icon"></i>
            <p class="upload-text">Dateien hierher ziehen oder <span>durchsuchen</span></p>
            <p class="upload-hint">Unterstützt: PNG, JPG, SVG, AI, PSD (max. 50MB)</p>
            <input type="file" id="file-input" hidden multiple>
          </div>
          
          <form class="upload-form mt-8">
            <div class="form-group mb-4">
              <label>Projekt auswählen</label>
              <select class="form-control">
                <option>Solana Labs - Brand Identity</option>
                <option>Evergrow Corp - Website</option>
                <option>Global Logistics - Annual Report</option>
              </select>
            </div>
            
            <div class="form-group mb-4">
              <label>Anmerkungen (Optional)</label>
              <textarea class="form-control" rows="3" placeholder="Was wurde geändert?"></textarea>
            </div>
            
            <button type="button" class="btn btn-primary w-full justify-center">
              Upload starten
            </button>
          </form>
        </div>

        <section class="recent-uploads">
          <h3>Letzte Uploads</h3>
          <div class="upload-list mt-4">
            <!-- Upload items would be listed here -->
            <div class="upload-item card flex items-center gap-4 mb-2">
              <div class="file-icon"><i data-lucide="file-image"></i></div>
              <div class="file-details">
                <span class="file-name">logo_v2_final.svg</span>
                <span class="file-meta">Hochgeladen vor 2 Stunden von Max</span>
              </div>
              <div class="file-status badge badge-success ml-auto">Verarbeitet</div>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
