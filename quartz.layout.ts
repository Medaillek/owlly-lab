import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.MobileOnly(Component.Explorer({ title: "mobile", folderDefaultState:"open", folderClickBehavior:"link" })),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(), Component.Darkmode(),
  ],
  footer: Component.Footer({
    links: {},
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.DesktopOnly(Component.Explorer({ title: "", folderClickBehavior:"link", folderDefaultState:"open", useSavedState: true})),
  ],
  right: [
    Component.DesktopOnly(Component.Graph()),
    //Component.MobileOnly(Component.Explorer({ title: "Explorer"})),
    Component.TableOfContents(),
    Component.DesktopOnly(Component.Backlinks()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.DesktopOnly(Component.Explorer({ title: "", folderClickBehavior:"link", folderDefaultState:"open", useSavedState: true })),
  ],
  right: [
    Component.DesktopOnly(Component.Graph()),
    //Component.MobileOnly(Component.Explorer({ title: "Explorer"})),
    Component.TableOfContents(),
    Component.DesktopOnly(Component.Backlinks()),
  ],
}
