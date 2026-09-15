const fs = require('fs');
const path = require('path');

const dir = 'e:/KoralTech/Updated website/src/components/all-services';
const files = [
  { name: 'WebAppIcon.tsx', theme: 'blue' },
  { name: 'MobileAppIcon.tsx', theme: 'green' },
  { name: 'ApiIcon.tsx', theme: 'blue' },
  { name: 'BleIcon.tsx', theme: 'purple' },
  { name: 'AiIcon.tsx', theme: 'pink' },
  { name: 'SoftwareProductIcon.tsx', theme: 'blue' },
  { name: 'ItStaffIcon.tsx', theme: 'green' },
  { name: 'CloudIcon.tsx', theme: 'blue' }
];

files.forEach(f => {
  const filePath = path.join(dir, f.name);
  if (!fs.existsSync(filePath)) {
    console.log('Skipping ' + f.name);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('IconBackgroundLayout')) {
    console.log('Already processed ' + f.name);
    return;
  }

  content = content.replace(
    'export default function',
    'import IconBackgroundLayout from "./IconBackgroundLayout";\n\nexport default function'
  );

  let insertPos = content.indexOf('</defs>');
  let insertIndex = 0;
  if (insertPos !== -1) {
    insertIndex = insertPos + 7;
  } else {
    insertIndex = content.indexOf('className={className}>') + 'className={className}>'.length;
  }

  const beforeInsert = content.substring(0, insertIndex);
  let afterInsert = content.substring(insertIndex);

  const firstG = afterInsert.indexOf('<g');
  if (firstG !== -1) {
    afterInsert = afterInsert.substring(firstG);
  }

  content = beforeInsert + '\n      <IconBackgroundLayout theme="' + f.theme + '" />\n      ' + afterInsert;
  
  fs.writeFileSync(filePath, content);
  console.log('Updated ' + f.name);
});
