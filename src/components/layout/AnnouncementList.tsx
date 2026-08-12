import { Container } from '@/components/ui/Container'

type Announcement = {
  label: string
}

// Informational text, not links — styling not measured in Figma, flagged
// in docs/design-questions.md.
const announcements: Announcement[] = [
  { label: '【令和８年熊本地震】店舗の営業状況について（8月5日更新）' },
  { label: '【令和８年熊本地震】店舗の営業状況について（8月5日更新）' },
  { label: '【令和８年熊本地震】店舗の営業状況について（8月5日更新）' },
]

export function AnnouncementList() {
  return (
    <div className="border-b border-(--color-border">
      <Container>
        <ul className="flex flex-col px-1.25 py-4.5 bg-gray-50">
          {announcements.map((announcement, index) => (
            <li
              key={index}
              className="text-body-sm text-(--color-ink)"
            >
              <span aria-hidden="true" className="text-gray-500">
                •
              </span>
              {announcement.label}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
