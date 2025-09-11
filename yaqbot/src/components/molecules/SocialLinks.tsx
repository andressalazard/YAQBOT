import React from 'react';
import LinkTag from '../atoms/LinkTag';

type SocialPlatforms = 'facebook' | 'twitter' | 'instagram' | 'tiktok' | 'youtube';

interface socialLinksPros {
  className?: string;
  linkClassName?: string;
  socialLinks: {
    platform?: SocialPlatforms;
    href?: string;
  }[];
}

const SocialLinks: React.FC<socialLinksPros> = ({ linkClassName, className, socialLinks }) => {
  return (
    <div className={className}>
      {socialLinks.map((link, index) => {
        return (
          <LinkTag id={index} className={linkClassName} href={link.href}>
            <i
              className={`fa-brands ${
                link.platform === 'facebook'
                  ? 'fa-facebook-f'
                  : link.platform === 'twitter'
                  ? 'fa-twitter'
                  : link.platform === 'instagram'
                  ? 'fa-instagram'
                  : link.platform === 'tiktok'
                  ? 'fa-tiktok'
                  : 'fa-youtube'
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
