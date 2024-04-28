type TagType = {
  IconUrl: string;
  Id: number;
  Name: string;
  Rank: number;
}

type Promotion = {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  Id: number;
  ImageUrl: string;
  PromotionCardColor: string;
  RemainingText: string;
  SeoName: string;
  Title: string;
  ScenarioType: string;
  Unavailable: boolean;
  Unvisible: boolean;
  ListButtonText: string;
  ListButtonTextBackGroundColor: string;
  CardType: string;
  ExternalUrl: string | null;
  ExternalType: string | null;
  ExternalRedirectType: string | null;
  ExternalWebviewType: string | null;
  ExternalLoginGate: string | null;
  IsLuckyDay: boolean;
  LuckyDayText: string | null;
  LuckyDayButtonText: string | null;
  LuckyDayTextColor: string | null;
  LuckyDayBackgroundColor: string | null;
}

type PromotionDetails = {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  Description: string;
  EndDate: string;
  Id: number;
  ImageUrl: string;
  CountryTimeZone: number;
  RemainingText: string;
  StartDate: string;
  Title: string;
  Type: string;
  CardType: string;
  ScenarioType: string;
  SeoName: string;
  Unavailable: boolean;
  IsMapAvailable: boolean;
  Unvisible: boolean;
  DetailButtonText: string;
  ListButtonText: string | null;
  LuckyDayText: string | null;
  LuckyDayTextColor: string | null;
  LuckyDayBackgroundColor: string | null;
  ExternalUrl: string | null;
  ExternalType: string | null;
  ExternalRedirectType: string | null;
  ExternalWebviewType: string | null;
  ExternalLoginGate: string | null;
  PromotionDetailItemAreas: {
    Title: string;
    Description: string;
    OpenedIconUrl: string;
    ClosedIconUrl: string;
    UseMapButton: boolean;
    PromotionDetailItems: {
      Title: string;
      Description: string;
      ImageUrl: string;
    }[];
  }[];
  Contents: {
    Title: string;
    Description: string;
    ImageUrl: string;
  }[];
  PromotionTags: TagType[];
  PromotionGalleries: {
    DocumentUrl: string;
    DocumentType: string;
    CoverImageUrl: string;
  }[]
  NextFlowConfigrations: unknown;
  GameWin: string | null;
}

export type { TagType, Promotion, PromotionDetails };