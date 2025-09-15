import React from 'react';
import LinkTag from '../atoms/LinkTag';

type SocialPlatforms = 'facebook' | 'twitter' | 'instagram' | 'tiktok' | 'youtube';

interface socialLinksPros {
  className?: string;
  linkClassName?: string;
  socialLinks: {
    name?: SocialPlatforms;
    url?: string;
    username?: string;
  }[];
}

const SocialLinks: React.FC<socialLinksPros> = ({ linkClassName, className, socialLinks }) => {
  return (
    <div className={className}>
      {socialLinks.map((link, index) => {
        return (
          <LinkTag id={index} className={linkClassName} href={link.url}>
            <i
              className={`fa-brands ${
                link.name === 'facebook' ? 'fa-facebook-f' : link.name === 'twitter' ? 'fa-twitter' : link.name === 'instagram' ? 'fa-instagram' : link.name === 'tiktok' ? 'fa-tiktok' : 'fa-youtube'
              }
                    }`}
            ></i>
          </LinkTag>
        );
      })}
    </div>
  );
};
export default SocialLinks;
