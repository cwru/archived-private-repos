# Overview

This is the live Center for International Affairs site on Aurora. It is not in a CMS, but uses many Server Side Includes. As of 07-22-16 there is a major difference between `staging` and `production` versions of the site. This is very important to understand.

## Staging

This 'version' of the site allows you to preview your changes locally in a browser on your computer, but should *never* be uploaded to Aurora. Also, this version of the site **might be** out of date. You should think of this as a `staging` are to be able to make changes and see them locally.

As of September 23, Staging has been archived and can be found in `./archive` as there should no longer be a use for it.

## Production

This 'version' of the site cannot be previewed locally in a web browser, but these are the `production`-ready files that get uploaded to Aurora. These may be referred to as the SSI or Server Side Include pages, and this is why you cannot preview these locally.

Depending on how you work, you might make changes to the `staging` version of a file, and once you are happy with how it looks, copy over *just the content* into the `production` file.

## Includes

The Center for International Affairs site uses some global, and mostly local Includes files. You will find these in `production/inc`. Changes to these files will update every page in the entire CIA site once uploaded to Aurora.

## Understanding SSI Templates

You will see many reference to files that start with `<!--#include virtual=`. Do not edit or delete these references.

The files are commented heavily and make it easy to find things. There are generally three places on a page you are interested in making edits, and these are the *only* things you would ever copy over from the `staging` to `production` version of a file.

**Page Breadcrums** can be easily found by looking for the `BEGIN PAGE BREADCRUMBS` comment.

**Sidebar Navigation** can easily be found by looking for the `BEGIN SIDEBAR NAV` comment.

**Main Column Content** can easily be found by looking for the `BEGIN MAIN COLUMN CONTENT` comment.

*If you have any questions about this process, please ask Zach or Ken.*

## Page Structure Change

As of 7-22-16 the site/page structure is being changed and both `production` and `staging` files have been updated. Some navigational links in `staging` files might be broken due to this change (they are not broken on the `production` files.)