import { MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const getImageButton = (openEvent, index) => {
        if(attributes.images[index]) {
            return (
                <img 
                    src={ attributes.images[index].url }
                    onClick={ openEvent }
                    alt="Imágen para el bloque"
                    className={`image-${index}`} // Clase dinámica
                />
            );
        }
        else {
            return (
                <div className="button-container">
                    <Button 
                        onClick={ openEvent }
                        className="button button-large"
                    >
                        Escoge una imágen
                    </Button>
                </div>
            );
        }
    };

    return (
        <div className="container block-class">
            { [0, 1, 2].map(index => (
                <div className="image-container">
                    <MediaUpload
                        key={ index }
                        onSelect={ image => {
                            const images = [...attributes.images];
                            images[index] = { url: image.url, link: 'http://localhost/wordpress/wp-admin/post.php?post=353&action=edit' }; // Añade aquí la URL a la que quieres redirigir
                            setAttributes({ images });
                        }}
                        type="image"
                        value={ attributes.images[index] }
                        render={ ({ open }) => getImageButton(open, index) }
                    />
                </div>
            ))}
        </div>
    );
}
