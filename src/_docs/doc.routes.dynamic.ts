
import { Routes, RouterModule } from '@angular/router';

import { PlaceHolderExampleComponent } from "./placeholder.component";
import { SimpleExampleComponent } from "./simple.component";

import { AccordionExampleComponent } from "./components/accordion/component-example";
import { AlertExampleComponent } from "./components/alert/component-example";
import { AlphabetSelectorExampleComponent } from "./components/alphabet-selector/component-example";
import { BannerExampleComponent } from "./components/banner/component-example";
import { BreadcrumbExampleComponent } from "./components/breadcrumb/component-example";
import { SamBreadcrumbsComponentExampleComponent } from "./components/breadcrumbs/component-example";
import { CollapsibleExampleComponent } from "./components/collapsible/component-example";
import { SamCommentComponentExampleComponent } from "./components/comments/comment/component-example";
import { SamCommentsComponentExampleComponent } from "./components/comments/component-example";
import { DownloadExampleComponent } from "./components/download/component-example";
import { FiltersContainerExampleComponent } from "./components/filters-container/component-example";
import { HeaderExampleComponent } from "./components/header/component-example";
import { HeaderMenuExampleComponent } from "./components/header-menu/component-example";
import { HistoryExampleComponent } from "./components/history/component-example";
import { SamImageComponentExampleComponent } from "./components/image/component-example";
import { InfoAccordionExampleComponent } from "./components/info-accordion/component-example";
import { LabelExampleComponent } from "./components/label/component-example";
import { ModalExampleComponent } from "./components/modal/component-example";
import { MultiselectDropdownExampleComponent } from "./components/multiselect-dropdown/component-example";
import { PaginationExampleComponent } from "./components/pagination/component-example";
import { POCExampleComponent } from "./components/point-of-contact/component-example";
import { SidenavExampleComponent } from "./components/sidenav/component-example";
import { SamMenuItemComponentExampleComponent } from "./components/sidenav/menu-item/component-example";
import { SamSidenavModuleExampleComponent } from "./components/sidenav/sidenav/component-example";
import { SpinnerExampleComponent } from "./components/spinner/component-example";
import { TabsExampleComponent } from "./components/tabs/component-example";
import { ClickOutsideExampleComponent } from "./directives/click-outside/component-example";
import { SamFocusDirectiveExampleComponent } from "./directives/focus/component-example";
import { StickyExampleComponent } from "./directives/sticky/component-example";
import { TabOutsideExampleComponent } from "./directives/tab-outside/component-example";
import { ButtonExampleComponent } from "./elements/button/component-example";
import { AutocompleteExampleComponent } from "./form-controls/autocomplete/component-example";
import { SamAutocompleteDropdownComponentExampleComponent } from "./form-controls/autocomplete-dropdown/component-example";
import { AutocompleteMultiselectExampleComponent } from "./form-controls/autocomplete-multiselect/component-example";
import { CheckboxExampleComponent } from "./form-controls/checkbox/component-example";
import { DateExampleComponent } from "./form-controls/date/component-example";
import { SamDateRangeComponentExampleComponent } from "./form-controls/date-range/component-example";
import { DateTimeExampleComponent } from "./form-controls/date-time/component-example";
import { ListDisplayExampleComponent } from "./form-controls/list-display/component-example";
import { NumberExampleComponent } from "./form-controls/number/component-example";
import { RadioExampleComponent } from "./form-controls/radiobutton/component-example";
import { SelectExampleComponent } from "./form-controls/select/component-example";
import { SamSelectResizableComponentExampleComponent } from "./form-controls/select-resizable/component-example";
import { TextExampleComponent } from "./form-controls/text/component-example";
import { TextareaExampleComponent } from "./form-controls/textarea/component-example";
import { TimeExampleComponent } from "./form-controls/time/component-example";
import { ToggleSwitchExampleComponent } from "./form-controls/toggle-switch/component-example";
import { NameEntryExampleComponent } from "./form-templates/name-entry/component-example";
import { PhoneEntryExampleComponent } from "./form-templates/phone-entry/component-example";
import { DateTimePipeExampleComponent } from "./pipes/date-time-display/component-example";
import { TimeAgoPipeExampleComponent } from "./pipes/time-ago/component-example";
import { CountryServiceDirectiveExampleComponent } from "./service-directives/autocomplete/country/component-example";
import { StateServiceDirectiveExampleComponent } from "./service-directives/autocomplete/state/component-example";
import { FieldsetWrapperExampleComponent } from "./wrappers/fieldset-wrapper/component-example";
import { LabelWrapperExampleComponent } from "./wrappers/label-wrapper/component-example";


//manual map, components that don't have documentation set up yet get pointed to the PlaceHolderExampleComponent
const map = {
  'doc-placeholder':PlaceHolderExampleComponent,
  'components/accordion':AccordionExampleComponent,
  'components/alert':AlertExampleComponent,
  'components/alphabet-selector':AlphabetSelectorExampleComponent,
  'components/banner':BannerExampleComponent,
  'components/breadcrumb':BreadcrumbExampleComponent,
  'components/collapsible':CollapsibleExampleComponent,
  'components/download':DownloadExampleComponent,
  'components/filters-container':FiltersContainerExampleComponent,
  'components/header':HeaderExampleComponent,
  'components/header-menu':HeaderMenuExampleComponent,
  'components/history':HistoryExampleComponent,
  'components/info-accordion':InfoAccordionExampleComponent,
  'components/label':LabelExampleComponent,
  'components/modal':ModalExampleComponent,
  'components/multiselect-dropdown':MultiselectDropdownExampleComponent,
  'components/pagination':PaginationExampleComponent,
  'components/point-of-contact':POCExampleComponent,
  //'components/search-header':SearchHeaderExampleComponent,
  'components/sidenav':SidenavExampleComponent,
  'components/spinner':SpinnerExampleComponent,
  'components/tabs':TabsExampleComponent,
  'directives/click-outside':ClickOutsideExampleComponent,
  'directives/sticky':StickyExampleComponent,
  'directives/tab-outside':TabOutsideExampleComponent,
  'elements/button':ButtonExampleComponent,
  'form-controls/autocomplete':AutocompleteExampleComponent,
  'form-controls/autocomplete-multiselect':AutocompleteMultiselectExampleComponent,
  'form-controls/checkbox':CheckboxExampleComponent,
  'form-controls/date':DateExampleComponent,
  'form-controls/date-time':DateTimeExampleComponent,
  'form-controls/number':NumberExampleComponent,
  'form-controls/radiobutton':RadioExampleComponent,
  'form-controls/list-display': ListDisplayExampleComponent,
  //'form-controls/searchbar':SearchbarExampleComponent,
  'form-controls/select':SelectExampleComponent,
  'form-controls/text':TextExampleComponent,
  'form-controls/textarea':TextareaExampleComponent,
  'form-controls/time':TimeExampleComponent,
  'form-controls/toggle-switch':ToggleSwitchExampleComponent,
  'form-service/Overview':SimpleExampleComponent,
  'form-templates/name-entry':NameEntryExampleComponent,
  'form-templates/phone-entry':PhoneEntryExampleComponent,
  'data-structures/interfaces': InterfacesComponent
};
export const ROUTES: Routes = [
  //{ path: 'form-templates/phone-entry',      component: PhoneEntryExampleComponent }
];
export const routing = RouterModule.forChild(ROUTES);
//add dynamic routes based on structure from sam-ui-elements set in webpack config
for(var idx in DOCS){
  var obj = {};
  obj['path'] = DOCS[idx]['link'];
  obj['component'] = DOCS[idx]['component'];
  // if(!map[DOCS[idx]['link']]){
  //   obj['component'] = map['doc-placeholder'];
  // } else {
  //   obj['component'] = map[DOCS[idx]['link']];
  // }
	ROUTES.push(obj);
}
