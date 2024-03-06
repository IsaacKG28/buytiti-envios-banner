import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    return (
        <div { ...useBlockProps.save() } className="block-class">
            { attributes.images.map((image, index) => (
                <div className="image-container">
                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                        <img 
                            src={ image.url }
                            alt={`Imagen para el bloque ${index + 1}`}
                            className={`image-${index}`} // Clase dinámica
                        />
                    </a>
                </div>
            ))}
        </div>
    );
}
