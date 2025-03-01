import { FileUpload as FileUploadPrimitive } from '@ark-ui/react';
import { FileIcon } from 'lucide-react';

const Component = (props: FileUploadPrimitive.RootProps) => {
  return (
    <FileUploadPrimitive.Root {...props} maxFiles={5}>
      <FileUploadPrimitive.Label>File Upload</FileUploadPrimitive.Label>
      <FileUploadPrimitive.Dropzone>
        Drag your file(s) here
      </FileUploadPrimitive.Dropzone>
      <FileUploadPrimitive.Trigger>Choose file(s)</FileUploadPrimitive.Trigger>
      <FileUploadPrimitive.ItemGroup>
        <FileUploadPrimitive.Context>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file) => (
              <FileUploadPrimitive.Item key={file.name} file={file}>
                <FileUploadPrimitive.ItemPreview type="image/*">
                  <FileUploadPrimitive.ItemPreviewImage />
                </FileUploadPrimitive.ItemPreview>
                <FileUploadPrimitive.ItemPreview type=".*">
                  <FileIcon />
                </FileUploadPrimitive.ItemPreview>
                <FileUploadPrimitive.ItemName />
                <FileUploadPrimitive.ItemSizeText />
                <FileUploadPrimitive.ItemDeleteTrigger>
                  X
                </FileUploadPrimitive.ItemDeleteTrigger>
              </FileUploadPrimitive.Item>
            ))
          }
        </FileUploadPrimitive.Context>
      </FileUploadPrimitive.ItemGroup>
      <FileUploadPrimitive.HiddenInput />
    </FileUploadPrimitive.Root>
  );
};

export const FileUpload = Object.assign(Component, {
  Root: FileUploadPrimitive.Root,
  Label: FileUploadPrimitive.Label,
  Dropzone: FileUploadPrimitive.Dropzone,
  Trigger: FileUploadPrimitive.Trigger,
  ItemGroup: FileUploadPrimitive.ItemGroup,
  Context: FileUploadPrimitive.Context,
  Item: FileUploadPrimitive.Item,
  ItemPreview: FileUploadPrimitive.ItemPreview,
  ItemPreviewImage: FileUploadPrimitive.ItemPreviewImage,
});
