import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function Resume() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "750px",
        }}
      >
        <Viewer fileUrl="/Eric_Espindola_Chavez_Resume.pdf" />
      </div>
      ;
    </Worker>
  );
}

export default Resume;
