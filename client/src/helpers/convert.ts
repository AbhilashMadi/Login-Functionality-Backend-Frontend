/** Converting the img file to base 64 so that we can store that in mongodb database */

import { rejects } from 'assert';

export default function convertToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') {
        resolve(fileReader.result);
      } else {
        reject(new Error('Failed to convert file to base64'));
      }
    };

    fileReader.onerror = () => {
      reject(new Error('Failed to read the file'));
    };

    fileReader.readAsDataURL(file);
  })
}