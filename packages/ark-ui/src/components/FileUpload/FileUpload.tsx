import { FileUpload as FileUploadPrimitive } from '@ark-ui/react';

export const FileUpload = Object.assign(FileUploadPrimitive.Root, {
  Root: FileUploadPrimitive.Root,
  Label: FileUploadPrimitive.Label,
  Dropzone: FileUploadPrimitive.Dropzone,
  Trigger: FileUploadPrimitive.Trigger,
  ItemGroup: FileUploadPrimitive.ItemGroup,
  Context: FileUploadPrimitive.Context,
  Item: FileUploadPrimitive.Item,
  ItemPreview: FileUploadPrimitive.ItemPreview,
  ItemPreviewImage: FileUploadPrimitive.ItemPreviewImage,
  ItemName: FileUploadPrimitive.ItemName,
  ItemSizeText: FileUploadPrimitive.ItemSizeText,
  ItemDeleteTrigger: FileUploadPrimitive.ItemDeleteTrigger,
  HiddenInput: FileUploadPrimitive.HiddenInput,
});
