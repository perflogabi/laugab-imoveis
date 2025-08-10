"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyGalleryProps {
  images: string[];
  title: string;
  altTexts?: string[];
}

export default function PropertyGallery({ images, title, altTexts }: PropertyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsModalOpen(false);
    } else if (event.key === 'ArrowLeft') {
      handlePrevious();
    } else if (event.key === 'ArrowRight') {
      handleNext();
    }
  };

  if (images.length === 0) {
    return null;
  }

  if (!isClient) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="md:col-span-2 lg:col-span-2">
          <div className="aspect-[16/9] w-full bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Carregando galeria...</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Galeria principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Imagem principal */}
        <div className="md:col-span-2 lg:col-span-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label={`Ver imagem ampliada: ${altTexts?.[selectedImage] || title}`}
          >
            <Image
              src={images[selectedImage]}
              alt={altTexts?.[selectedImage] || `${title} - Imagem ${selectedImage + 1}`}
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 800px"
              priority={selectedImage === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200" />
          </button>
        </div>

        {/* Miniaturas */}
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-2">
          {images.slice(0, 4).map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all ${
                selectedImage === index ? 'ring-2 ring-primary' : 'hover:ring-2 hover:ring-gray-300'
              }`}
              aria-label={`Selecionar imagem ${index + 1}: ${altTexts?.[index] || title}`}
              aria-pressed={selectedImage === index}
            >
              <Image
                src={image}
                alt={altTexts?.[index] || `${title} - Miniatura ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, (max-width: 1024px) 16vw, 200px"
              />
            </button>
          ))}
          {images.length > 4 && (
            <div className="relative aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">
                +{images.length - 4} mais
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Modal de visualização */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagens"
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Botão fechar */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Fechar visualizador"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Imagem */}
            <div className="relative aspect-[16/9] max-h-[80vh]">
              <Image
                src={images[selectedImage]}
                alt={altTexts?.[selectedImage] || `${title} - Imagem ${selectedImage + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Navegação */}
            {images.length > 1 && (
              <>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white border-white hover:bg-opacity-70"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white border-white hover:bg-opacity-70"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            {/* Indicadores */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === selectedImage ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                    aria-current={index === selectedImage ? 'true' : 'false'}
                  />
                ))}
              </div>
            )}

            {/* Contador */}
            <div className="absolute bottom-4 right-4 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
              {selectedImage + 1} de {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
