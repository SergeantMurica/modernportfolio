import React from "react";

// eslint-disable-next-line react/prop-types
function ProjectThumbnail({ url}) {
    return (
        <div className="project-thumbnail">
                <iframe
                    src={url}
                    title="Website Thumbnail"
                    style={{
                        width: "1000px", // Larger width to give a zoomed-out effect
                        height: "1000px", // Larger height
                        transform: "scale(0.3)", // Adjust scale to fit the iframe
                        transformOrigin: "top left", // Scale starts from the top-left
                        pointerEvents: "none", // Disable interaction
                        border: "none",
                    }}
                />
        </div>
    );
}

export default ProjectThumbnail;