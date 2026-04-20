import { execSync } from 'child_process';
import { resolve } from 'path';

export function getLastUpdated(filePath: string): string {
  try {
    const absolutePath = resolve(filePath);
    const timestamp = execSync(`git log -1 --format=%ai "${absolutePath}"`, {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'ignore']
    }).trim();
    
    if (!timestamp) {
      return new Date().toISOString();
    }
    
    return timestamp;
  } catch (error) {
    return new Date().toISOString();
  }
}

export function formatDate(dateString: string, locale: string = 'en'): string {
  const date = new Date(dateString);
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  
  return date.toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', options);
}
