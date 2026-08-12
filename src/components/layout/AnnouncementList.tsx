import { Container } from '@/components/ui/Container'

type Announcement = {
  label: string
}

// Informational text, not links — styling not measured in Figma, flagged
// in docs/design-questions.md.
const announcements: Announcement[] = [
  { label: '・【令和８年熊本地震】店舗の営業状況について（8月5日更新）' },
  { label: '・【令和８年熊本地震】店舗の営業状況について（8月5日更新）' },
  { label: '・【令和８年熊本地震】店舗の営業状況について（8月5日更新）' },
]

export function AnnouncementList() {
  return (
    <div>
      <Container>
        <ul className="flex flex-col bg-gray-50 px-1.25 py-4.5">
          {announcements.map((announcement, index) => (
            <li key={index} className="text-body-sm text-(--color-ink)">
              {announcement.label}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
