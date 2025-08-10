"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Copy, 
  Check,
  MessageCircle
} from 'lucide-react';

interface SocialShareProps {
  title: string;
  description: string;
  url: string;
}

export default function SocialShare({ title, description, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const shareData = {
    title,
    text: description,
    url,
  };

  const handleNativeShare = async () => {
    if (typeof window !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Erro ao compartilhar:', error);
      }
    }
  };

  const handleCopyLink = async () => {
    if (typeof window !== 'undefined') {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.log('Erro ao copiar link:', error);
      }
    }
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`,
  };

  const handleSocialShare = (platform: keyof typeof shareLinks) => {
    if (typeof window !== 'undefined') {
      const shareUrl = shareLinks[platform];
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  if (!isClient) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Share2 className="h-5 w-5" />
            Compartilhar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-32 bg-gray-200 rounded flex items-center justify-center">
            <p className="text-gray-600">Carregando...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Share2 className="h-5 w-5" />
          Compartilhar
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Botão de compartilhamento nativo */}
        <Button 
          onClick={handleNativeShare}
          className="w-full"
          variant="outline"
        >
          <Share2 className="h-4 w-4 mr-2" />
          Compartilhar
        </Button>

        {/* Redes sociais */}
        <div className="grid grid-cols-2 gap-2">
          <Button
            onClick={() => handleSocialShare('facebook')}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            aria-label="Compartilhar no Facebook"
          >
            <Facebook className="h-4 w-4" />
            Facebook
          </Button>
          
          <Button
            onClick={() => handleSocialShare('twitter')}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            aria-label="Compartilhar no Twitter"
          >
            <Twitter className="h-4 w-4" />
            Twitter
          </Button>
          
          <Button
            onClick={() => handleSocialShare('whatsapp')}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            aria-label="Compartilhar no WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
          
          <Button
            onClick={() => handleSocialShare('linkedin')}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            aria-label="Compartilhar no LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Button>
        </div>

        {/* E-mail e copiar link */}
        <div className="grid grid-cols-2 gap-2">
          <Button
            onClick={() => handleSocialShare('email')}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            aria-label="Compartilhar por e-mail"
          >
            <Mail className="h-4 w-4" />
            E-mail
          </Button>
          
          <Button
            onClick={handleCopyLink}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            aria-label="Copiar link"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copiar Link
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
